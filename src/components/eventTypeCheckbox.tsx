function EventTypeCheckbox({ title }: { title: string }) {
  return (
    <div className="type_item">
      <input type="checkbox" id={title} value={title} name={"event_type_filter"} />
      <label htmlFor={title}>{title}</label>
    </div>
  );
}

export default EventTypeCheckbox;
