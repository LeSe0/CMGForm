import { useEffect, useRef } from "react";
type UsePropagateRefProps = {
  setFieldValue: React.Dispatch<React.SetStateAction<any>>;
  name: string;
  value: any;
};
export function usePropagateRef(props: UsePropagateRefProps) {
  const { name, value, setFieldValue } = props;

  const flagRef = useRef(true);
  useEffect(() => {
    if (flagRef.current) {
      flagRef.current = false;
      return;
    }
    setFieldValue(value);
  }, [name]);
}
