import { motion } from 'framer-motion';

const textAnimation = {
    hidden: {
        x: -100,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1, 
        transition: {
            duration: 1,
            delay: custom * 0.2,

        }
    }),
    
}

export const Header = () => {
    return (
        <div className="header">
            <motion.div 
                className="header__left"
                initial='hidden'
                whileInView='visible'
                viewport={{amount: 0.3, once: true}}
            >
                <motion.h1 custom={1} variants={textAnimation} className='header__left__title'>Skin care collection</motion.h1>
                <motion.p custom={2} variants={textAnimation} className='header__left__par'>We have high quality, medical-grade products to help with any skin type or concern.</motion.p>
                <a  href="#product"><motion.button custom={3} variants={textAnimation} className='header__left__btn'>SHOP NOW</motion.button></a>
        
            </motion.div>
            <div className="header__right">
            </div>
        </div>
    )
}