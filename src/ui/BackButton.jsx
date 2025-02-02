import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();
  const handleClick = function () {
    navigate(-1);
  };
  return (
    <button
      className="rounded-md bg-gray-800 p-2 text-red-600"
      onClick={handleClick}
    >
      Back
    </button>
  );
}

export default BackButton;
