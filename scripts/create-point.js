function populateUFs() {
    const ufSelect = document
            .querySelector('select[name=uf]')
    
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        .then(res => res.json())
        .then(states => {
            states.forEach(element => {
                ufSelect.innerHTML += `<option value="${element.id}">${element.nome}</option>`
            });
        })
}

populateUFs()

function populateCitys () {
    document
        .querySelector('select[name=uf]')

        .addEventListener('change', (event) => {
            const citySelect = document
                .querySelector('select[name=city]')

            const stateInput = document
                .querySelector('input[name=state]')

                
                
            const ufValue = event.target.value

            stateInput.value = event.target.options[event.target.selectedIndex].text

            const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios` 

            console.log(url)
            fetch(url)
            .then(res => res.json())
            .then(cities => {
                cities.forEach(element => {
                    citySelect.innerHTML += `<option value="${element.id}">${element.nome}</option>`
                });

                citySelect.disabled = false
            })
        })
}

populateCitys()