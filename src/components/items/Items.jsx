
import { useSelector } from 'react-redux';
import { dataItems } from '../../data/dataItems';
import { getSelectedCategory } from '../../redux/itemsSlice';
import { MItem } from './Item';
import { motion } from "framer-motion";





export const Items = () => {
    const selectedCategory = useSelector(getSelectedCategory);

    
    
    const itemsAnimation = {
        hidden: {
            opacity: 0
        },
        visible: custom =>( {
            opacity: 1, 
            transition: {
                duration: 1,
                delay: custom * 0.1,
                ease: "easeInOut",
                staggerChildren: 0.5
            },
        }),
    }


    return (
        <motion.div 
        className='all-items'
        initial='hidden'
        animate='visible'
        // whileInView='visible'
        // viewport={{amount: 0}}
        >
            {dataItems
            .filter(item => {
                if (selectedCategory === "ALL") return true;
                return selectedCategory === item.category;
            })
            .map((item, index) => (<MItem 
                
            variants={itemsAnimation} 
            custom={index+1} 
            item={item} 
            key={item.id}
            />))}
        </motion.div>
    )
}
