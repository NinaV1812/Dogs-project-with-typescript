import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/DogsLayout.css";

// import { useSelector } from "react-redux";
// import { selectBreed } from "../store/breed/selectors";
// import useBreedSearch from "../components/UseBreedSearch"

type DogsPictures = string[] | undefined;

const DogsLayout = () => {
  const [dogsPictures, setDodsPictures] = useState<DogsPictures>();
  //   const breedy = useSelector(selectBreed);
  //   const param = breedy[0]
  //     ? breedy[0].split(" ")[0].replace(",", "").toLowerCase()
  //     : "beagle";
  const param: string = "terrier";

  useEffect(() => {
    const fetchData = async () => {
      console.log("param in useeffect ", param);

      const result = await axios(`https://dog.ceo/api/breed/${param}/images`);
      console.log("results in dogslayout", result);

      const myFiveteenDogs: [] = result.data.message.slice(0, 17);

      setDodsPictures(myFiveteenDogs);
      console.log("myFiveteenDogs in dogslayout", myFiveteenDogs);
    };

    fetchData();
  }, []);

  if (param) {
    return (
      <div id="backGround">
        <div></div>
        {dogsPictures ? (
          <div id="photos">
            {dogsPictures.map((picture: string, index: number) => {
              if (picture.length === index + 1) {
                return (
                  <div>
                    <img
                      src={picture}
                      alt=""
                      key={picture}
                      data-wow-delay="0.5s"
                    />
                  </div>
                );
              } else {
                return (
                  <img
                    className="img-responsive"
                    src={picture}
                    alt=""
                    key={picture}
                    data-wow-delay="0.5s"
                  />
                );
              }
            })}
          </div>
        ) : null}
      </div>
    );
  } else {
    return <div id="whateSpace"> </div>;
  }
};

export default DogsLayout;
