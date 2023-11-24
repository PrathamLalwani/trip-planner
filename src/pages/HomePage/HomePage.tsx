import React from "react";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import styles from "./HomePage.module.css";
type Props = {
  children?: React.ReactNode;
};

const HomePage = (props: Props) => {
  const [search, setSearch] = React.useState<string>("");

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") onSubmit();
  };
  const onSubmit = () => {
    if (search === "") return;
    setSearch("");
  };

  return (
    <div className={styles["home-page"]}>
      {props.children}
      <div className={styles["trip-search"]}>
        <Input
          inputData={search}
          onChange={onSearchChange}
          onKeyPress={onKeyPress}
          placeholder="Enter a location"
        />
        <Button onClick={onSubmit}>Search</Button>
      </div>
    </div>
  );
};

export default HomePage;
