import "./CategoryTable.scss";

const CategoryTable = () => {
    return (
        <div className="category-table">
            <button className="active">CELULAR</button>
            <button>ACESSÓRIOS</button>
            <button>TABLETS</button>
            <button>NOTEBOOKS</button>
            <button>TVS</button>
            <button>VER TODOS</button>
        </div>
    );
};

export default CategoryTable;
