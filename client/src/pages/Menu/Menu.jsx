import DSCard from "../../components/DSCard/DSCard";
import FocCard from "../../components/FocCard/FocCard";
import Header from "../../components/Header/Header";
import styles from "./menu.module.css";
import PythonCard from "../../components/PythonCard/PythonCard";

function Menu() {
  return (
    <>
      <Header name="LABxRIT" />
      <div className={styles.container}>
        <FocCard />
        <PythonCard />
        <DSCard />
       
      </div>
    </>
  );
}

export default Menu;