"use client"

import React, { useState } from "react"
import { Search } from "lucide-react"

export function SearchBar({ onSearch = () => {}, placeholder = "Find a recipe or ingredient" }) {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center w-full max-w-[500px]">
      <div className="relative w-full">
        <input
          type="text"
          placeholder={placeholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:border-gray-400 focus:outline-none shadow-sm pr-10"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center justify-center bg-[#e33d26] text-white px-3 hover:bg-[#c93522] focus:outline-none rounded-r-md"
          aria-label="Search"
        >
          <Search className="h-5 w-5" />
        </button>
      </div>
    </form>
  )
}

export default SearchBar;