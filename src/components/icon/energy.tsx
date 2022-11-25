type Props = {
  width?: string | number;
  height?: string | number;
  fill?: string;
};

export default function energyIcon({
  width = 24,
  height = 25,
  fill = "#333333",
}: Props) {
  return (
    <div style={{ width, height }}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_674_89)">
          <path
            d="M18.2997 0.270264H9.29942L5.70056 13.228H9.30675L6.24051 24.2703H7.32069L17.7589 11.312H12.471L18.2997 0.270264Z"
            fill={fill}
          />
        </g>
        <defs>
          <clipPath id="clip0_674_89">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0 0.270264)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}
