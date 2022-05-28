import { Filter } from "./Filter";

export const Categories = () => {
    
    return (
        <div className="filter">
            {['ALL', 'SERUM', 'MASK', 'MOISTURIZER', 'BB-CREAM'].
            map((category, id) => <Filter category={category} key={id}/>)
            }
        </div>
    )
}