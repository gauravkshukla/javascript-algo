//problem with || operator

function addTax(price, taxes, description) {
    // 10% or 0.1 is default tax  
    taxes = taxes || 0.1
    // What if taxes are 0%, that could be a problem.
    const total = price * (1 + taxes)
    console.log(
      `%c${description} with tax, totals to: ${total}`,
      "font-weight: bold; color: blue"
    )
  }
  
  addTax(100, 0.3, "An item")
  addTax(100, undefined, "Default tax")
  addTax(100, 0, "Zero tax")

  //third addTax will return wrong value 
  // to resolve it use ?? (Nullish coalescing opertaor)

  function addTax(price, taxes, description) {
    // 10% or 0.1 is default tax  
    taxes = taxes ?? 0.1
    const total = price * (1 + taxes)
    console.log(
      `%c${description} with tax, totals to: ${total}`,
      "font-weight: bold; color: blue"
    )
  }
  
  addTax(100, 0.3, "An item")
  addTax(100, undefined, "Default tax")
  addTax(100, 0, "Zero tax")

  //it will apply zero tax
  // point to remember - 0 is treated as false so in first example it takes default value as 0.1
  //where as The ?? operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined; therefore, we get the correct value for taxes.
  //so it will return 0 only and third addTax will apply 0 tax instaed default