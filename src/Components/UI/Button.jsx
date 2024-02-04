export default function Button({ className, children, textOnly, ...props }) {
  let cssClass = textOnly ? "text-button" : "button";
  cssClass += " " + className;
  return (
    <button className={cssClass} {...props}>
      {children}
    </button>
  );
}
