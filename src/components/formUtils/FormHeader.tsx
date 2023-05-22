interface FormHeaderProps {
  title: string;
  subtitle: string;
  icon: string;
  children: React.ReactNode;
}

const FormHeader: React.FC<FormHeaderProps> = ({
  title,
  subtitle,
  icon,
  children,
}) => {
  return (
    <div className="flex flex-col mb-10">
      <div className="flex flex-row items-center gap-2">
        <span className="text-2xl">{icon}</span>
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>
      <p>{subtitle}</p>
      {children}
    </div>
  );
};

export default FormHeader;
