import React, { useState } from 'react';
import styles from './Login.module.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = {};
        let isValid = true;

        if (!formData.email) {
            newErrors.email = 'The email field is required';
            isValid = false;
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
            isValid = false;
        }

        if (!formData.password) {
            newErrors.password = 'The password field is required';
            isValid = false;
        }

        setErrors(newErrors);

        if (isValid) {
            alert('Login Successful!');
        }
    };

    return (
        <div className={styles.container}>
            {/* Header Strip with Forest Background */}
            <div className={styles.headerStrip}></div>

            <div className={styles.loginCard}>
                {/* Amazon Logo Top of Card */}
                <div className={styles.logoContainer}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                        alt="Amazon"
                        className={styles.logo}
                    />
                </div>

                <h1 className={styles.title}>Login</h1>

                {/* Small Tree Illustration */}
                <div className={styles.treeContainer}>
                    <img
                        src="/assets/tree/tree.png"
                        srcSet="/assets/tree/tree.png 1x, /assets/tree/tree@2x.png 2x"
                        alt="Tree Illustration"
                        className={styles.treeImage}
                    />
                </div>

                <form onSubmit={handleSubmit} className={styles.form}>
                    {/* Email Field */}
                    <div className={styles.formGroup}>
                        <label className={styles.inputLabel} htmlFor="email">Email</label>
                        <div className={styles.inputWrapper}>
                            <input
                                id="email"
                                type="text"
                                name="email"
                                placeholder="souravrbudke@gmail.com"
                                className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.email &&
                            <div className={styles.errorMessage}>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.errorBlockIcon}>
                                    <circle cx="12" cy="12" r="10" fill="#EE2D6E" />
                                    <path d="M6 12H18" stroke="white" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                                <span>{errors.email}</span>
                            </div>
                        }
                    </div>

                    {/* Password Field */}
                    <div className={styles.formGroup}>
                        <label className={styles.inputLabel} htmlFor="password">Password</label>
                        <div className={styles.inputWrapper}>
                            <input
                                id="password"
                                type="password"
                                name="password"
                                placeholder="Password"
                                className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.password && <span className={styles.errorMessage}>{errors.password}</span>}
                    </div>


                    <div className={styles.authLinks}>
                        <a href="#" className={styles.forgotPassword}>Forgot Password?</a>
                        <a href="#" className={styles.newUserLink}>New User? Sign Up</a>
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                        Sign In
                    </button>
                </form>

                <div className={styles.divider}>
                    <span className={styles.dividerText}>or</span>
                </div>

                <div className={styles.socialLogin}>
                    <button className={`${styles.socialBtn} ${styles.googleBtn}`}>
                        <div className={styles.socialIconContainer}>
                            <img
                                src="/assets/google/Google.png"
                                srcSet="/assets/google/Google.png 1x, /assets/google/google@2x.png 2x"
                                alt="G"
                                className={styles.socialImg}
                            />
                        </div>
                        <span className={styles.socialText}>CONTINUE WITH GOOGLE</span>
                    </button>
                    <button className={`${styles.socialBtn} ${styles.facebookBtn}`}>
                        <div className={styles.socialIconContainer}>
                            <span className={styles.facebookIconText}>f</span>
                        </div>
                        <span className={styles.socialText}>CONTINUE WITH FACEBOOK</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
