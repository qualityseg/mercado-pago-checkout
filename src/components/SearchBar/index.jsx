import React, { useState } from 'react';
import { Badge, Button, Container } from 'react-bootstrap';
import cursosData from './cursos.json';
import styles from './CursosEad.module.scss';
import axios from 'axios';

const Catalogo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(cursosData);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [paymentData, setPaymentData] = useState({
    title: '',
    price: '',
    quantity: 1,
  });

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    if (searchTerm) {
      const filteredResults = cursosData.filter((curso) =>
        curso.titulo.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults(cursosData);
    }
  };

  const handleCourseSelection = (e, curso) => {
    const isSelected = selectedCourses.some((c) => c.id === curso.id);

    if (isSelected) {
      setSelectedCourses((prevSelectedCourses) =>
        prevSelectedCourses.filter((c) => c.id !== curso.id)
      );
    } else {
      setSelectedCourses((prevSelectedCourses) => [
        ...prevSelectedCourses,
        {
          id: curso.id,
          quantidade: 1,
          titulo: curso.titulo,
          valor: curso.valor,
        },
      ]);
    }

    e.currentTarget.parentNode.classList.toggle(styles.selected);
    const floatingButton = document.querySelector('.floatingButton');
    if (floatingButton) {
      floatingButton.classList.toggle(styles.selected, selectedCourses.length > 0);
    }
  };

  const handleQuantityChange = (e, curso) => {
    const quantity = parseInt(e.target.value);
    setSelectedCourses((prevSelectedCourses) =>
      prevSelectedCourses.map((c) =>
        c.id === curso.id ? { ...c, quantidade: quantity } : c
      )
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/create_preference', paymentData);
      const data = response.data;
      window.location.href = `https://www.mercadopago.com.br/checkout/v1/redirect?preference-id=${data.id}`;
    } catch (error) {
      console.error(error);
    }
  };

  const handleCheckout = async () => {
    const items = selectedCourses.map((curso) => ({
      title: curso.titulo,
      unit_price: parseFloat(curso.valor),
      quantity: curso.quantidade,
    }));

    setPaymentData({
      title: 'Cursos selecionados',
      price: items.reduce((total, item) => total + item.unit_price * item.quantity, 0),
      quantity: items.length,
    });

    handleSubmit();
  };

  return (
    <Container>
      <div className={styles.searchContainer}>
        <div className={styles['search-bar']}>
          <input
            type="text"
            placeholder="Pesquisar"
            value={searchTerm}
            onChange={handleSearch}
          />
          <div className={styles['search-icon']}></div>
        </div>
      </div>
      <div className={`${styles.treatments} ${styles.center}`}>
        {searchResults.map((curso) => {
          const isSelected = selectedCourses.some((c) => c.id === curso.id);
          const selectedCourse = selectedCourses.find((c) => c.id === curso.id);
          return (
            <div
              className={`${styles.treatmentsItem} ${isSelected ? styles.selected : ''}`}
              key={curso.id}
            >
              <div className={styles.images}>
                <img
                  src={curso.imageSrc}
                  alt={curso.titulo}
                  className={styles.image}
                  width={235}
                  height={127}
                />
              </div>
              <h3>{curso.titulo}</h3>
              <div className={styles.description}>
                <p>{curso.descricao}</p>
              </div>
              <div className={styles.courseInfo}>
                <div className={styles.courseInfoItem}>
                  <p className={styles.courseInfoText}>
                    Carga Horaria: {curso.carga_horaria}
                  </p>
                </div>
                <div className={styles.courseInfoItem}>
                  <p className={styles.courseInfoText}>Valor: {curso.valor}</p>
                </div>
              </div>
              <Button
                className={`${styles.courseButton} ${
                  isSelected ? `${styles.danger} ${styles.selectedButton}` : styles.primary
                }`}
                style={{ backgroundColor: '#01A982' }}
                onClick={(e) => handleCourseSelection(e, curso)}
              >
                {isSelected ? 'Remover curso' : <span className="select-course-text">Selecione o curso</span>}
              </Button>

              {isSelected && (
                <div className={styles.quantityOption}>
                  <label htmlFor={`quantity-${curso.id}`}>Quantidade:</label>
                  <select
                    id={`quantity-${curso.id}`}
                    value={selectedCourse.quantidade}
                    onChange={(e) => handleQuantityChange(e, curso)}
                  >
                    {Array.from({ length: 50 }, (_, index) => (
                      <option value={index + 1} key={index + 1}>
                        {index + 1}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <Button className={`${styles.floatingButton} floatingButton`} onClick={handleCheckout}>
        <img src="https://i.imgur.com/NTdUTN0.png" alt="Icon" />
        <Badge pill variant="danger" className={`${styles.customBadge} Badge`}>
          {selectedCourses.reduce((total, curso) => total + curso.quantidade, 0)}
        </Badge>
      </Button>
    </Container>
  );
};

export default Catalogo;
