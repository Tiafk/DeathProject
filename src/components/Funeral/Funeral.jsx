import React from "react";
import Navigation from "./Nav/Navigation";
import Coffins from "./other/Coffins";
import styles from "./_funeral.module.scss";
import Filters from "./other/Filters/Filters";

function Funeral ({ navCoffis, coffins, categories, chooseCategory }) {

    return (
        <div className={styles.funeral}>
            <div className={styles.container}>
                <Navigation navCoffis={navCoffis} />
                <div className={styles.funeralContent}>
                    <Filters categories={categories} chooseCategory={chooseCategory}/>
                    <Coffins coffins1={coffins} />
                </div>
            </div>
        </div>
    );
};

export default Funeral;