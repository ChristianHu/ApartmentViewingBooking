package at.fhcampuswien.apartmentviewingbooking.config;

import at.fhcampuswien.apartmentviewingbooking.security.AuthTokenFilter;
import at.fhcampuswien.apartmentviewingbooking.service.userservice.UserService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

    @Value("${spring.h2.console.path}")
    private String h2ConsolePath;


    private final UserService userDetailsService;


    private final AuthEntryPointJwt unauthorizedHandler;


    private final AuthTokenFilter authenticationJwtTokenFilter;


    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public WebSecurityConfig(UserService userDetailsService, AuthEntryPointJwt unauthorizedHandler, AuthTokenFilter authenticationJwtTokenFilter, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userDetailsService = userDetailsService;
        this.unauthorizedHandler = unauthorizedHandler;
        this.authenticationJwtTokenFilter = authenticationJwtTokenFilter;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    public void configure(AuthenticationManagerBuilder authenticationManagerBuilder) throws Exception {
        authenticationManagerBuilder.userDetailsService(userDetailsService).passwordEncoder(bCryptPasswordEncoder);
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .cors()
                .and()
                .csrf()
                .disable()
                .exceptionHandling()
                .authenticationEntryPoint(unauthorizedHandler)
                .and()
                .sessionManagement()
                .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
                .and().authorizeRequests()
                .antMatchers("/api/apartment/auth/**").permitAll()
                .antMatchers("/resources/**", "/static/**", "/webjars/**").permitAll()
                .antMatchers(h2ConsolePath + "/**").permitAll()
                .anyRequest().authenticated();

        http.headers().frameOptions().disable();
        http.addFilterBefore(authenticationJwtTokenFilter, UsernamePasswordAuthenticationFilter.class);
    }

}
