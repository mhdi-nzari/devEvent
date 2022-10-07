function LocationRadio({ title }: { title: string }) {
  return (
    <div className="location_item">
      <input type="radio" id={title} value={title} name={"location_filter"} />
      <label htmlFor={title}>{title}</label>
    </div>
  );
}

export default LocationRadio;
