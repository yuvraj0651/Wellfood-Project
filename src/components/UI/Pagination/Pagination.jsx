import { useEffect, useState } from "react";

const Pagination = ({ products }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    let LastItemIndex = currentPage * itemsPerPage;
    let FirstItemIndex = LastItemIndex - itemsPerPage;
    let totalItems = products.slice(FirstItemIndex, LastItemIndex);

    let totalPages = Math.ceil(products.length / itemsPerPage);
    let pageNumber = [];

    for (let i = 1; i <= totalPages; i++) {
        pageNumber.push(i);
    }

    useEffect(() => {
        setCurrentPage(1);
    }, [products]);

    return (
        <>
            <div className="pagination flex items-center justify-center w-full gap-2" style={{ marginTop: "1.5rem" }}>
                <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} className='btn capitalize tracking-wide font-medium cursor-pointer'>prev</button>
                {
                    pageNumber.map((number) => {
                        return (
                            <button
                                key={number}
                                onClick={() => setCurrentPage(number)}
                                className={`btn  ${currentPage === number ? "active" : ""}`}
                            >
                                {number}
                            </button>
                        )
                    })
                }
                <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} className='btn capitalize tracking-wide font-medium cursor-pointer'>next</button>
            </div>
        </>
    )
}

export default Pagination;