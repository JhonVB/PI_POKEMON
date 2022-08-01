import React from "react";
import { useState, useEffect, useSelector } from "react";
import "./Paginacion.css";
import Cards from "../Cards/Cards";

function Paginacion({ data, pageLimit, dataLimit, order }) {
  const [pages, setPages] = useState(Math.ceil(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setPages(() => Math.ceil(data.length / dataLimit));
    setCurrentPage(1);
  }, [data.length, order]);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }
  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    const mostrar = new Array(pageLimit)
      .fill()
      .map((_, idx) => start + idx + 1);

    for (let e of mostrar) {
      if (e === pages) {
        const nuevo = mostrar.slice(0, mostrar.indexOf(e) + 1);
        return nuevo;
      }
    }
    return mostrar;
  };

  return (
    <div className="contenedor">
      <div className="pagination">
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          prev
        </button>

        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

        <button
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? "disabled" : ""}`}
        >
          next
        </button>
      </div>

      <div className="containerCards">
        <Cards pokemons={getPaginatedData()} />
      </div>
    </div>
  );
}

export default Paginacion;
