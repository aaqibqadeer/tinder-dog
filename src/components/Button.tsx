export const Button = ({
  classes,
  label,
}: {
  classes: string;
  label: string;
}) => {
  return (
    <div className="card-body">
      <button className={"btn mx-auto d-block " + classes}>{label}</button>
    </div>
  );
};
