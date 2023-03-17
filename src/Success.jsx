const Success = () => {
  return (
    <div
      style={{
        // margin: "60px auto",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems:"center",
      }}
    >
      <img
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
        }}
        src="https://avatars.githubusercontent.com/u/1486366?v=4" 
        alt=""
      />
      <button
        style={{
          border: "none",
          marginTop: 20,
          // width: 120,
          borderRadius: 5,
          padding: "20px",
          backgroundColor: "teal",
          color: "white",
          fontWeight: "600",
          cursor: "pointer",
          fontSize: 18,
          textAlign: "center",
        }}
      >
        Successfull
      </button>
        <p style={{
          marginTop: 20,
          textAlign: "center",
          fontSize: 16,
          fontWeight: "500"
        }}>
          Your order is being prepared. Thanks for<br/>
          shoosing Alex shop.
        </p>
    </div>
  );
};

export default Success;