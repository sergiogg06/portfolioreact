import React, { useEffect, useState } from 'react'
import { Spinner } from "@/components/ui/spinner"

const Contacto = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    loading ? (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner />
      </div>
    ) : (
      <div>Contacto</div>
    )
  )
}

export default Contacto