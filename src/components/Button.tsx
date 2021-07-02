export const Button = ({
  classes,
  label,
  handleUpdate,
}: {
  classes: string;
  label: string;
  handleUpdate: () => {};
}) => {
  return (
    <div className="card-body">
      <button
        className={"btn mx-auto d-block " + classes}
        onClick={handleUpdate}
      >
        {label}
      </button>
    </div>
  );
};
