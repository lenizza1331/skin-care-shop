import { motion } from "framer-motion";

const textAnimation = {
    hidden: {
        x: -40,
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1, 
        transition: {
            duration: 1
        }
    },
    
}

export const Ads = () => {
    return (
        <motion.div 
        initial="hidden"
        whileInView="visible"
        className="ads">
            <motion.p variants={textAnimation} className="ads__par">FREE SHIPPING ON $149!</motion.p>
        </motion.div>
    )
}
