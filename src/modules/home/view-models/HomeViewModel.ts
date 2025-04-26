import { useNavigate } from 'react-router-dom';

export function useHomeViewModel() {
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(path);
  };

  return {
    navigateTo
  };
}