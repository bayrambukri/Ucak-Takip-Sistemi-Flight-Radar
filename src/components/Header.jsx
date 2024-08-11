import { useSelector } from "react-redux";

const Header = () => {
  const { isLoading, error, flights } = useSelector(
    (store) => store.flightReducer
  );

  return (
    <header>
      <div>
        <img src="/unnamed.png" className="resim"/>
        <h3>Uçuş Radarı</h3>
      </div>

      {isLoading ? (
        <p>Hesaplanıyor...</p>
      ) : error ? (
        <p className="error">Üzgünüz bir sorun oluştu: {error}</p>
      ) : (
        <p>{flights.length} Uçuş Bulundu!</p>
      )}
    </header>
  );
};

export default Header;
