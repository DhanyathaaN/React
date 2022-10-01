import styles from './prerequisite.module.css';
import Chip from '../Chip/Chip';

function Prerequisite(props){
return(
    <div className={styles.prereq}>
      <h4>Prerequisites: &nbsp;</h4>
      {props.arrayOfItems.map((dataStructure,pythonlab) =>
        <Chip foc={props.foc} pythonlab={props.pythonlab} name={dataStructure+pythonlab} key={dataStructure+pythonlab} />
      )}
    </div>
);
}

export default Prerequisite;