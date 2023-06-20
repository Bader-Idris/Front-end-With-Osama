const Modal = () => {
  const mode = 'edit'
  const handleChange = () => {
    console.log('wow')
  };
  return (
    <div className="overlay">
      <div className="modal">
        <div className="form-title-container">
          <h3>Let's {mode} Tu Tarea</h3>
          <button>❌</button>
        </div>
        <form>
          <input
            required
            maxLength={30}
            placeholder="Tu Tarea Most be here"
            name="title"
            value={""}
            onChange={handleChange}
          />
          <input
            required
            type="range"
            min="0"
            max="100"
            name="progress"
            value={""}
            onChange={handleChange}
          />
          <input
            type="submit"
            className={mode}
          />
        </form>
      </div>
    </div>
  );
};

export default Modal;
