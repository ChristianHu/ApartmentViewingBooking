package at.fhcampuswien.apartmentviewingbooking.service.userservice;

import at.fhcampuswien.apartmentviewingbooking.model.user.UserDetailsImpl;
import at.fhcampuswien.apartmentviewingbooking.model.user.UserDto;
import at.fhcampuswien.apartmentviewingbooking.model.user.UserEntity;
import at.fhcampuswien.apartmentviewingbooking.repository.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@Service
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserServiceImpl(UserRepository userRepository, ModelMapper modelMapper, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    @Override
    public UserDto createUser(UserDto userDetails) {
        userDetails.setEncryptedPassword(bCryptPasswordEncoder.encode(userDetails.getPassword()));
        UserEntity userEntity = modelMapper.map(userDetails, UserEntity.class);
        userRepository.save(userEntity);
        return modelMapper.map(userEntity, UserDto.class);
    }

    @Override
    public UserDto retrieveUser(long id) {
        Optional<UserEntity> userEntityOptional = userRepository.findById(id);
        if (userEntityOptional.isPresent()) {
            return modelMapper.map(userEntityOptional, UserDto.class);
        }
        return null;
    }

    @Override
    public UserDto updateUser(UserDto userDetails) {
        UserEntity userEntity = modelMapper.map(userDetails, UserEntity.class);
        userRepository.save(userEntity);
        return modelMapper.map(userEntity, UserDto.class);
    }

    @Override
    public boolean deleteUser(long id) {
        Optional<UserEntity> userEntityOptional = userRepository.findById(id);
        if (userEntityOptional.isPresent()) {
            userRepository.delete(userEntityOptional.get());
            return true;
        }
        return false;
    }

    @Override
    public List<UserDto> retrieveAllUsers() {
        List<UserEntity> userEntities = userRepository.findAll();
        return userEntities.stream()
                .map(userEntity -> modelMapper.map(userEntity, UserDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public UserDto getUserDetailsByEmail(String email) {
        Optional<UserEntity> userEntity = userRepository.findByEmail(email);
        if (userEntity.isEmpty()) throw new UsernameNotFoundException(email);
        return modelMapper.map(userEntity.get(), UserDto.class);
    }

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserEntity user = userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with username: " + username));
        return UserDetailsImpl.build(user);
    }

    @Override
    public boolean existsByUsername(String username) {
        return userRepository.existsByUsername(username);
    }

    @Override
    public boolean existsByEmail(String email) {
        return userRepository.existsByEmail(email);
    }

    @Override
    public Optional<UserEntity> getUserById(long userId){
        return userRepository.findById(userId);
    }


}
