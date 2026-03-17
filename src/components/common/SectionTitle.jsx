const SectionTitle = ({ title, subtitle, align = 'center' }) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  return (
    <div className={`mb-8 ${alignmentClasses[align]}`}>
      <p className="text-blue-600 font-semibold text-sm tracking-wider mb-2">
        {title}
      </p>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        {subtitle}
      </h2>
    </div>
  );
};

export default SectionTitle;