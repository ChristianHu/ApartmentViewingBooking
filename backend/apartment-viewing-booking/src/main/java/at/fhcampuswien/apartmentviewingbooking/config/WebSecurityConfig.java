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
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;

import java.util.Collections;
import java.util.List;


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
                .configurationSource(request -> corsConfiguration())
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
                .antMatchers("/api/apartment/flats/swagger-ui/**").permitAll()
                .antMatchers("/api/apartment/bookings/swagger-ui/**").permitAll()
                .antMatchers("/api/apartment/comments/swagger-ui/**").permitAll()
                .antMatchers("/api/apartment/users/swagger-ui/**").permitAll()
                .antMatchers("/api/apartment/swagger-ui/**").permitAll()
                .antMatchers("/swagger-ui/**").permitAll()
                .antMatchers("/v2/api-docs", "/configuration/ui", "/swagger-resources", "/configuration/security", "/swagger-ui.html",  "/swagger-resources/configuration/ui", "/swagger-resources/configuration/security").permitAll()
                .antMatchers("/resources/**", "/static/**", "/webjars/**").permitAll()
                .antMatchers(h2ConsolePath + "/**").permitAll()
                .anyRequest().authenticated();

        http.headers().frameOptions().disable();
        http.addFilterBefore(authenticationJwtTokenFilter, UsernamePasswordAuthenticationFilter.class);
    }

    private CorsConfiguration corsConfiguration() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
        corsConfiguration.setAllowedHeaders(List.of("Origin", "Content-Type", "X-Auth-Token"));
        corsConfiguration.setAllowedOriginPatterns(Collections.singletonList("*"));
        corsConfiguration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "PUT","OPTIONS","PATCH", "DELETE"));
        corsConfiguration.setAllowCredentials(true);
        corsConfiguration.setExposedHeaders(List.of("Authorization"));
        return corsConfiguration;
    }
}
