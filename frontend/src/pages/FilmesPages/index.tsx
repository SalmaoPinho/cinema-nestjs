import { useState, useEffect, type FormEvent } from 'react';
import { filmesService } from '../../services/filme.service';
import { sessoesService } from '../../services/sessao.service';
import { type IFilme, filmeSchema } from '../../models/filme.model';
import { ZodError } from 'zod';

export const FilmesPages = () => {
    const [filmes, setFilmes] = useState<IFilme[]>([]);
    const [formData, setFormData] = useState({
        titulo: '',
        sinopse: '',
        genero: '',
        classificacao: '',
        duracao: '',
        elenco: '',
        dataIniciaExibicao: '',
        dataFinalExibicao: '',
        imagemUrl: ''
    });
    const [editandoId, setEditandoId] = useState<number | null>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        carregarFilmes();
    }, []);

    const carregarFilmes = async () => {
        try {
            const dados = await filmesService.findAll();
            setFilmes(dados);
        } catch (error) {
            console.error('Erro ao carregar filmes:', error);
            alert('Erro ao carregar filmes. Verifique a conexão com a API.');
        }
    };

    const limparFormulario = () => {
        setFormData({
            titulo: '',
            sinopse: '',
            genero: '',
            classificacao: '',
            duracao: '',
            elenco: '',
            dataIniciaExibicao: '',
            dataFinalExibicao: '',
            imagemUrl: ''
        });
        setEditandoId(null);
        setErrors({});
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setErrors({});

        try {
            const filmeData: Omit<IFilme, 'id'> = {
                titulo: formData.titulo,
                sinopse: formData.sinopse,
                genero: formData.genero as IFilme['genero'],
                classificacao: formData.classificacao,
                duracao: parseInt(formData.duracao),
                elenco: formData.elenco,
                dataIniciaExibicao: formData.dataIniciaExibicao,
                dataFinalExibicao: formData.dataFinalExibicao,
                imagemUrl: formData.imagemUrl,
                cinemaId: 1
            };

            // Validação com Zod
            filmeSchema.parse(filmeData);

            if (editandoId) {
                await filmesService.update(editandoId, filmeData);
                alert('Filme atualizado com sucesso!');
            } else {
                await filmesService.create(filmeData);
                alert('Filme cadastrado com sucesso!');
            }

            limparFormulario();
            carregarFilmes();
        } catch (error) {
            if (error instanceof ZodError) {
                const fieldErrors: Record<string, string> = {};
                error.issues.forEach((err) => {
                    if (err.path[0]) {
                        fieldErrors[err.path[0] as string] = err.message;
                    }
                });
                setErrors(fieldErrors);
            } else {
                console.error('Erro ao salvar filme:', error);
                alert('Erro ao salvar filme. Verifique os dados e tente novamente.');
            }
        }
    };

    const editarFilme = (filme: IFilme) => {
        setFormData({
            titulo: filme.titulo,
            sinopse: filme.sinopse,
            genero: filme.genero,
            classificacao: filme.classificacao,
            duracao: filme.duracao.toString(),
            elenco: filme.elenco,
            dataIniciaExibicao: filme.dataIniciaExibicao.split('T')[0],
            dataFinalExibicao: filme.dataFinalExibicao.split('T')[0],
            imagemUrl: filme.imagemUrl || ''
        });
        setEditandoId(filme.id || null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const excluirFilme = async (id: number) => {
        if (!confirm('Tem certeza que deseja excluir este filme? Todas as sessões associadas também serão excluídas.')) return;

        try {
            // No NestJS, as sessões podem ser deletadas em cascata ou manualmente
            // Aqui seguiremos o fluxo do backend
            await filmesService.delete(id);
            alert('Filme excluído com sucesso!');
            carregarFilmes();
        } catch (error) {
            console.error('Erro ao excluir filme:', error);
            alert('Erro ao excluir filme.');
        }
    };

    return (
        <>
            <section className="hero-section">
                <div className="container bg-primary">
                    <div className="row align-items-center">
                        <div className="col-md-8">
                            <h1 className="fw-bold display-5">
                                <i className="bi bi-film me-3"></i>Cadastro de Filmes
                            </h1>
                            <p className="lead mb-0">Cadastre e gerencie o catálogo de filmes do seu cinema</p>
                        </div>
                        <div className="col-md-4 text-md-end">
                            <a href="/home" className="btn btn-dark">
                                <i className="bi bi-arrow-left me-2"></i>Voltar ao Início
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="card form-card">
                            <div className="card-header py-4 bg-primary">
                                <h3 className="card-title mb-0 text-center">
                                    <i className="bi bi-plus-circle me-2"></i>
                                    {editandoId ? 'Editar Filme' : 'Novo Filme'}
                                </h3>
                            </div>
                            <div className="card-body p-4">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-4 mb-4">
                                            <div className="mb-4">
                                                <label htmlFor="imagem" className="form-label">
                                                    <i className="bi bi-image me-2" style={{ color: "var(--frutiger-blue)" }}></i>
                                                    URL do Poster
                                                </label>
                                                <input
                                                    type="url"
                                                    className={`form-control ${errors.imagemUrl ? 'is-invalid' : ''}`}
                                                    id="imagemUrl"
                                                    placeholder="https://exemplo.com/poster.jpg"
                                                    value={formData.imagemUrl}
                                                    onChange={(e) => setFormData({ ...formData, imagemUrl: e.target.value })}
                                                />
                                                {errors.imagemUrl && <div className="invalid-feedback d-block">{errors.imagemUrl}</div>}
                                                <div className="form-text">
                                                    Recomendado: aspect ratio 2:3 (ex: 300x450px)
                                                </div>
                                            </div>

                                            {formData.imagemUrl && (
                                                <div className="text-center">
                                                    <img
                                                        src={formData.imagemUrl}
                                                        alt="Preview"
                                                        className="img-fluid rounded"
                                                        style={{
                                                            maxWidth: '100%',
                                                            aspectRatio: '2/3',
                                                            objectFit: 'cover'
                                                        }}
                                                        onError={(e) => {
                                                            e.currentTarget.src = 'https://via.placeholder.com/300x450?text=Imagem+Indisponível';
                                                        }}
                                                    />
                                                </div>
                                            )}
                                        </div>

                                        <div className="col-md-8">
                                            <div className="mb-4">
                                                <label htmlFor="titulo" className="form-label">
                                                    <i className="bi bi-card-heading me-2" style={{ color: "var(--frutiger-blue)" }}></i>
                                                    Título do Filme
                                                </label>
                                                <input
                                                    type="text"
                                                    className={`form-control form-control-lg ${errors.titulo ? 'is-invalid' : ''}`}
                                                    id="titulo"
                                                    placeholder="Digite o título do filme"
                                                    required
                                                    value={formData.titulo}
                                                    onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
                                                />
                                                {errors.titulo && <div className="invalid-feedback d-block">{errors.titulo}</div>}
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="sinopse" className="form-label">
                                                    <i className="bi bi-text-paragraph me-2" style={{ color: "var(--frutiger-green)" }}></i>
                                                    Sinopse
                                                </label>
                                                <textarea
                                                    className={`form-control ${errors.sinopse ? 'is-invalid' : ''}`}
                                                    id="sinopse"
                                                    rows={4}
                                                    placeholder="Sinopse do filme..."
                                                    required
                                                    value={formData.sinopse}
                                                    onChange={(e) => setFormData({ ...formData, sinopse: e.target.value })}
                                                ></textarea>
                                                {errors.sinopse && <div className="invalid-feedback d-block">{errors.sinopse}</div>}
                                            </div>

                                            <div className="mb-4">
                                                <label htmlFor="elenco" className="form-label">
                                                    <i className="bi bi-people me-2" style={{ color: "var(--frutiger-blue)" }}></i>
                                                    Elenco
                                                </label>
                                                <input
                                                    type="text"
                                                    className={`form-control ${errors.elenco ? 'is-invalid' : ''}`}
                                                    id="elenco"
                                                    placeholder="Ator 1, Ator 2..."
                                                    required
                                                    value={formData.elenco}
                                                    onChange={(e) => setFormData({ ...formData, elenco: e.target.value })}
                                                />
                                                {errors.elenco && <div className="invalid-feedback d-block">{errors.elenco}</div>}
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="genero" className="form-label">
                                                        <i className="bi bi-tags me-2" style={{ color: "var(--frutiger-orange)" }}></i>
                                                        Gênero
                                                    </label>
                                                    <select
                                                        className="form-select"
                                                        id="genero"
                                                        required
                                                        value={formData.genero}
                                                        onChange={(e) => setFormData({ ...formData, genero: e.target.value })}
                                                    >
                                                        <option value="">Selecione um gênero</option>
                                                        <option value="ACAO">Ação</option>
                                                        <option value="DRAMA">Drama</option>
                                                        <option value="FICCAO_CIENTIFICA">Ficção Científica</option>
                                                        <option value="COMEDIA">Comédia</option>
                                                        <option value="TERROR">Terror</option>
                                                        <option value="ROMANCE">Romance</option>
                                                        <option value="ANIMACAO">Animação</option>
                                                        <option value="DOCUMENTARIO">Documentário</option>
                                                    </select>
                                                </div>

                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="classificacao" className="form-label">
                                                        <i className="bi bi-exclamation-triangle me-2" style={{ color: "var(--frutiger-lime)" }}></i>
                                                        Classificação Indicativa
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className={`form-control ${errors.classificacao ? 'is-invalid' : ''}`}
                                                        id="classificacao"
                                                        placeholder="Livre, 12, 14..."
                                                        required
                                                        value={formData.classificacao}
                                                        onChange={(e) => setFormData({ ...formData, classificacao: e.target.value })}
                                                    />
                                                    {errors.classificacao && <div className="invalid-feedback d-block">{errors.classificacao}</div>}
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="duracao" className="form-label">
                                                        <i className="bi bi-clock me-2" style={{ color: "var(--frutiger-cyan)" }}></i>
                                                        Duração (minutos)
                                                    </label>
                                                    <input
                                                        type="number"
                                                        className={`form-control ${errors.duracao ? 'is-invalid' : ''}`}
                                                        id="duracao"
                                                        placeholder="120"
                                                        min="1"
                                                        max="300"
                                                        required
                                                        value={formData.duracao}
                                                        onChange={(e) => setFormData({ ...formData, duracao: e.target.value })}
                                                    />
                                                    {errors.duracao && <div className="invalid-feedback d-block">{errors.duracao}</div>}
                                                </div>

                                                <div className="col-md-6 mb-4">
                                                    <label htmlFor="dataIniciaExibicao" className="form-label">
                                                        <i className="bi bi-calendar-date me-2" style={{ color: "var(--frutiger-blue)" }}></i>
                                                        Início da Exibição
                                                    </label>
                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        id="dataIniciaExibicao"
                                                        required
                                                        value={formData.dataIniciaExibicao}
                                                        onChange={(e) => setFormData({ ...formData, dataIniciaExibicao: e.target.value })}
                                                    />
                                                </div>

                                                <div className="col-md-12 mb-4">
                                                    <label htmlFor="dataFinalExibicao" className="form-label">
                                                        <i className="bi bi-calendar-check me-2" style={{ color: "var(--frutiger-blue)" }}></i>
                                                        Fim da Exibição
                                                    </label>
                                                    <input
                                                        type="date"
                                                        className="form-control"
                                                        id="dataFinalExibicao"
                                                        required
                                                        value={formData.dataFinalExibicao}
                                                        onChange={(e) => setFormData({ ...formData, dataFinalExibicao: e.target.value })}
                                                    />
                                                </div>
                                            </div>

                                            <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                                                <button type="button" className="btn btn-secondary me-md-2" onClick={limparFormulario}>
                                                    <i className="bi bi-x-circle me-2"></i>Limpar
                                                </button>
                                                <button type="submit" className="btn btn-primary">
                                                    <i className="bi bi-check-circle me-2"></i>
                                                    {editandoId ? 'Atualizar Filme' : 'Salvar Filme'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container bg-dark">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h3 className="fw-bold">
                                <i className="bi bi-list-ul me-2" style={{ color: "var(--frutiger-blue)" }}></i>
                                Filmes Cadastrados
                            </h3>
                            <span className="badge bg-primary fs-6">{filmes.length} filmes</span>
                        </div>

                        {filmes.length === 0 ? (
                            <div className="text-center mt-4">
                                <i className="bi bi-inbox display-1 text-muted"></i>
                                <h4 className="text-muted mt-3">Nenhum filme cadastrado</h4>
                                <p className="text-muted">Comece cadastrando o primeiro filme usando o formulário acima.</p>
                            </div>
                        ) : (
                            <div className="table-responsive">
                                <table className="table table-hover table-striped">
                                    <thead className="table-dark">
                                        <tr>
                                            <th style={{ width: "80px" }}>Poster</th>
                                            <th>Título</th>
                                            <th>Gênero</th>
                                            <th>Classificação</th>
                                            <th>Duração</th>
                                            <th>Estreia</th>
                                            <th>Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filmes.map((filme) => (
                                            <tr key={filme.id}>
                                                <td>
                                                    <img
                                                        src={filme.imagemUrl || 'https://via.placeholder.com/60x90?text=?'}
                                                        alt={filme.titulo}
                                                        className="img-thumbnail"
                                                        style={{
                                                            width: '60px',
                                                            aspectRatio: '2/3',
                                                            objectFit: 'cover'
                                                        }}
                                                    />
                                                </td>
                                                <td>{filme.titulo}</td>
                                                <td>
                                                    <span className="badge bg-info">{filme.genero}</span>
                                                </td>
                                                <td>{filme.classificacao}</td>
                                                <td>{filme.duracao} min</td>
                                                <td>{filme.dataIniciaExibicao ? new Date(filme.dataIniciaExibicao).toLocaleDateString('pt-BR') : '-'}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-sm btn-warning me-2"
                                                        onClick={() => editarFilme(filme)}
                                                    >
                                                        <i className="bi bi-pencil"></i>
                                                    </button>
                                                    <button
                                                        className="btn btn-sm btn-danger"
                                                        onClick={() => filme.id && excluirFilme(filme.id)}
                                                    >
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}