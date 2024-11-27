import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";
import { fetchData } from "../services/api";
import { useContext } from "react";
import { CartContext } from "../context/Context";
const Home = () => {
  const [store, setStore] = useState(() => {
    try {
      const savedTasks = localStorage.getItem("store");
      return savedTasks ? JSON.parse(savedTasks) : [];
    } catch (err) {
      console.log("Error in parsing data", err);
    }
  });
  const { cart, addToCart } = useContext(CartContext);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    localStorage.setItem("store", JSON.stringify(store));
  }, [store]);
  useEffect(() => {
    const loadData = async () => {
      try {
        const getData = await fetchData();
        setStore((prevData) => {
          const newData = Array.isArray(prevData) ? [...getData] : [];
          console.log("NewData is found:", newData);
          return newData;
        });
        console.log(store);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  return (
    <div>
      <Navbar />
      {loading ? (
        <h1>Loading</h1>
      ) : store.length > 0 ? (
        <div className="flex justify-center flex-wrap">
          <ul
            className="grid grid-cols-3  
        "
          >
            {store.map((currentValue) => (
              <div key={currentValue.id} className="mr-7 mb-2 ">
                <button>
                  <MovieCard
                    title={currentValue.title}
                    image={currentValue.image}
                    price={currentValue.price}
                    id={currentValue.id}
                    rating={currentValue.rating?.rate}
                    count={currentValue.rating?.count}
                  />
                </button>
              </div>
            ))}
          </ul>
        </div>
      ) : (
        <p>Nothing to Display...</p>
      )}
    </div>
  );
};

export default Home;
