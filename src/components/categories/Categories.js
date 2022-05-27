import { Filter } from "./Filter";

export const Categories = () => {
    return (
        <div className="filter">
            {['ALL', 'SERUM', 'MASK', 'MOISTURIZER', 'BB-CREAM'].
            map(category => <Filter category={category} />)
            }
        </div>
    )
}