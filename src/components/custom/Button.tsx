type ButtonProps = {
  buttonText?: string;
  buttonUrl?: string;
  buttonWidth?: number;
  buttonHeight?: number;
};

export default function Button({
  buttonText = "No Text Configured",
  buttonUrl = "/",
  buttonWidth = 150, // adjust to change width
  buttonHeight = 45, // adjust to change height
}: ButtonProps) {
  return (
    <div className="relative flex items-center justify-center p-5">
      <a href={buttonUrl}>
        <div
          style={{ minWidth: buttonWidth, minHeight: buttonHeight }}
          className={`group flex w-auto translate-x-0 items-center justify-center overflow-hidden rounded-4xl bg-black text-center`}
        >
          <p className="relative z-10 text-sm text-white transition duration-500 group-hover:text-[#ffffff]">
            {buttonText}
          </p>
          <span className="absolute inset-0 h-full w-0 bg-teal-500 transition-all duration-500 ease-in-out group-hover:w-full"></span>
        </div>
      </a>
    </div>
  );
}
