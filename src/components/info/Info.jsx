import { motion } from "framer-motion";

const blockAnimation = {
    hidden: {
        x: 30,
        opacity: 0
    },
    visible: custom => ({
        x: 0,
        opacity: 1, 
        transition: {
            duration: .7,
            delay: custom * 0.2,
            type: "spring",
            bounce: 0.5,
        }
    }),
    
}


export const Info = () => {
    return (
        <motion.div 
            className="info"
            initial='hidden'
            whileInView='visible'
            viewport={{amount: 0.6, once: true}}
        >
            <motion.div custom={1} variants={blockAnimation} className="info__block">
                <p className="info__block__par1">Natural components</p>
            </motion.div>
            <motion.div custom={2} variants={blockAnimation} className="info__block">
                <p className="info__block__par2">Cruelty free</p>
            </motion.div>
            <motion.div custom={3} variants={blockAnimation} className="info__block">
                <p className="info__block__par3">Paraben free</p>
            </motion.div>
        </motion.div>
    )
}