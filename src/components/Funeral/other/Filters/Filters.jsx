import styles from './_filters.module.scss';

function Filters({categories, chooseCategory}) {
    return (
        <div className={styles.containerFilter}>
            {categories?.map((el) => (
                <div 
                key={el.key} 
                className={styles.filter} 
                onClick={() => chooseCategory(el.key)}
                >
                    {el.name}
                </div>
            ))}
        </div>
    )
}


export default Filters;