import FilterGroup from "./FilterGroup";

const ProductListPage = () => {
    return (
        <>
        
            <div className="FiltrarPor">
                <h3>Filtrar Por</h3>
                <hr />
                <div className="marca">
                    <FilterGroup title="Marka" inputType="checkbox" opitions={[
                        {
                            text: "  Adiddas"
                        },
                        {
                            text: " Calenciaga"
                        },
                        {
                            text: " K-Swiss"
                        },
                        {
                            text: " Nike"
                        },
                        {
                            text: " Puma"
                        }
                    ]}>
                    </FilterGroup>
                </div>

                <div className="categoria">
                    <FilterGroup title="Categoria" inputType="checkbox" opitions={[
                        {
                            text: " Esporte e lazer"
                        },
                        {
                            text: " Casual"
                        },
                        {
                            text: " Utilitário"
                        },
                        {
                            text: " Corrida"
                        }
                    ]}>
                    </FilterGroup>
                </div>
                <div className="genero">
                    <FilterGroup title="Gênero" inputType="CheckBox" opitions={[
                        {
                            text: " Masculino"
                        },
                        {
                            text: " Feminino"
                        },
                        {
                            text: " Unisex"
                        }
                    ]}>
                    </FilterGroup>
                </div>


                <div className="estado">
                    <FilterGroup title="Estado" inputType="radio" opitions={[
                        {
                            text: " Novo"
                        },
                        {
                            text: " Usado"
                        }
                    ]}>
                    </FilterGroup>

                </div>


            </div>
        </>
    );
}

export default ProductListPage;