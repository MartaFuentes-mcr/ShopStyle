"use client"

import { ShoppingBag } from "lucide-react"
import { useState } from "react"

export function CartWidget() {
  const [itemCount] = useState(3)

  return (
    <button className="relative group">
      <div className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors">
        <ShoppingBag className="w-5 h-5 text-foreground group-hover:text-accent transition-colors" />
        <span className="hidden sm:inline text-sm font-medium text-foreground">Carrito</span>
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </div>
    </button>
  )
}
