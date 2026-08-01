function averageResponseTime(times) {
  if (Array.isArray(times) === false || times.length === 0) {
        return "Invalid";
   }

 let total = 0;

    for (let i = 0; i < times.length; i++) {
        
// if (typeof times[i] !== "number" || !Number.isFinite(times[i])
          if (typeof times[i] !== "number") {

            return "Invalid";
        }
        total += times[i];
    }

  return (total / times.length);
  
}