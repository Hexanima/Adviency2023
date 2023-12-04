import styles from "./list.module.css";

export interface Gift {
  name: string;
}

export interface ListPropsParams {
  list: Gift[];
}

function List({ list }: ListPropsParams) {
  return (
    <ul className={styles.list}>
      {list.map((gift) => (
        <li key={`Gift${gift.name}`}>{gift.name}</li>
      ))}
    </ul>
  );
}

export default List;
