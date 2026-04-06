import { useState, useEffect, type FormEvent } from 'react';
import { salasService } from '../../services/sala.service';
import { sessoesService } from '../../services/sessao.service';
import { type ISala, salaSchema } from '../../models/sala.model';
import { ZodError } from 'zod';

export const SalasPages = () => {
    const [salas, setSalas] = useState<ISala[]>([]);
    const [formData, setFormData] = useState({
        numero: '',
        capacidade: '',
        fileiras: '8',
        colunas: '10',
        cinemaId: 1
    });
    const [editandoId, setEditandoId] = useState<number | null>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});

    useEffect(() => {
        carregarSalas();
    }, []);

    const carregarSalas = async () => {
        try {
            const dados = await salasService.findAll();
            setSalas(dados);
        } catch (error) {
            console.error('Erro ao carregar salas:', error);
            alert('Erro ao carregar salas. Verifique a conexão com a API.');
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setErrors({});

        try {
            const salaData: Omit<ISala, 'id'> = {
                numero: parseInt(formData.numero),
                capacidade: parseInt(formData.capacidade),
                fileiras: parseInt(formData.fileiras),
                colunas: parseInt(formData.colunas),
                cinemaId: formData.cinemaId
            };

            // Validação com Zod
            salaSchema.parse(salaData);

            if (editandoId) {
                await salasService.update(editandoId, salaData);
                alert('Sala atualizada com sucesso!');
            } else {
                await salasService.create(salaData);
                alert('Sala cadastrada com sucesso!');
            }

            limparFormulario();
            carregarSalas();
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
                console.error('Erro ao salvar sala:', error);
                alert('Erro ao salvar sala. Verifique os dados e tente novamente.');
            }
        }
    };

    const limparFormulario = () => {
        setFormData({
            numero: '',
            capacidade: '',
            fileiras: '8',
            colunas: '10',
            cinemaId: 1
        });
        setEditandoId(null);
        setErrors({});
    };

    const editarSala = (sala: ISala) => {
        setFormData({
            numero: sala.numero.toString(),
            capacidade: sala.capacidade.toString(),
            fileiras: sala.fileiras.toString(),
            colunas: sala.colunas.toString(),
            cinemaId: sala.cinemaId
        });
        setEditandoId(sala.id || null);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const excluirSala = async (id: number) => {
        if (!confirm('Tem certeza que deseja excluir esta sala?')) return;

        try {
            // No NestJS, as sessões podem ser deletadas em cascata ou manualmente
            await salasService.delete(id);
            alert('Sala excluída com sucesso!');
            carregarSalas();
        } catch (error) {
            console.error('Erro ao excluir sala:', error);
            alert('Erro ao excluir sala.');
        }
    };

    return (
        <>
            <div className="container bg-primary">
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <h1 className="fw-bold display-5">
                            <i className="bi bi-building me-3"></i>Cadastro de Salas
                        </h1>
                        <p className="lead mb-0">Configure as salas de exibição do seu cinema</p>
                    </div>
                    <div className="col-md-4 text-md-end">
                        <a href="/home" className="btn btn-dark">
                            <i className="bi bi-arrow-left me-2"></i>Voltar ao Início
                        </a>
                    </div>
                </div>

            </div>
            <section className="py-4 d-flex justify-content-center">
                <div className="col-lg-8">
                    <div className="card form-card">
                        <div className="card-header bg-primary py-4">
                            <h3 className="card-title mb-0 text-center">
                                <i className="bi bi-plus-circle me-2"></i>
                                Nova Sala
                            </h3>
                        </div>
                        <div className="card-body p-4">
                            <form id="formSala" onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label htmlFor="numeroSala" className="form-label">
                                        <i className="bi bi-hash me-2" style={{ color: 'var(--frutiger-blue)' }}></i>
                                        Número da Sala
                                    </label>
                                    <input
                                        type="number"
                                        className={`form-control form-control-lg ${errors.numero ? 'is-invalid' : ''}`}
                                        id="numeroSala"
                                        placeholder="Ex: 1, 2, 3..."
                                        required
                                        value={formData.numero}
                                        onChange={(e) => setFormData({ ...formData, numero: e.target.value })}
                                    />
                                    {errors.numero && <div className="invalid-feedback d-block">{errors.numero}</div>}
                                    <div className="form-text">Número identificador da sala</div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-4">
                                        <label htmlFor="capacidade" className="form-label">
                                            <i className="bi bi-people me-2" style={{ color: 'var(--frutiger-green)' }}></i>
                                            Capacidade
                                        </label>
                                        <input
                                            type="number"
                                            className={`form-control ${errors.capacidade ? 'is-invalid' : ''}`}
                                            id="capacidade"
                                            placeholder="Ex: 150"
                                            min="1"
                                            max="500"
                                            required
                                            value={formData.capacidade}
                                            onChange={(e) => setFormData({ ...formData, capacidade: e.target.value })}
                                        />
                                        {errors.capacidade && <div className="invalid-feedback d-block">{errors.capacidade}</div>}
                                        <div className="form-text">Número total de assentos</div>
                                    </div>

                                    <div className="col-md-4 mb-4">
                                        <label htmlFor="fileiras" className="form-label">
                                            <i className="bi bi-grid-3x3 me-2" style={{ color: 'var(--frutiger-orange)' }}></i>
                                            Fileiras
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="fileiras"
                                            required
                                            value={formData.fileiras}
                                            onChange={(e) => setFormData({ ...formData, fileiras: e.target.value })}
                                        />
                                    </div>

                                    <div className="col-md-4 mb-4">
                                        <label htmlFor="colunas" className="form-label">
                                            <i className="bi bi-grid-3x2 me-2" style={{ color: 'var(--frutiger-orange)' }}></i>
                                            Colunas
                                        </label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="colunas"
                                            required
                                            value={formData.colunas}
                                            onChange={(e) => setFormData({ ...formData, colunas: e.target.value })}
                                        />
                                    </div>
                                </div>

                                <div className="d-grid gap-2 d-md-flex justify-content-md-end mt-4">
                                    <button type="button" className="btn btn-secondary me-md-2" onClick={limparFormulario}>
                                        <i className="bi bi-x-circle me-2"></i>Limpar
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        <i className="bi bi-check-circle me-2"></i>
                                        {editandoId ? 'Atualizar Sala' : 'Salvar Sala'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <div className="container bg-dark">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <h3 className="fw-bold">
                                <i className="bi bi-list-ul me-2" style={{ color: 'var(--frutiger-blue)' }}></i>
                                Salas Cadastradas
                            </h3>
                            <span className="badge bg-primary fs-6">{salas.length} salas</span>
                        </div>

                        {salas.length === 0 ? (
                            <div className="text-center mt-4">
                                <i className="bi bi-inbox display-1 text-muted"></i>
                                <h4 className="text-muted mt-3">Nenhuma sala cadastrada</h4>
                                <p className="text-muted">Comece cadastrando a primeira sala usando o formulário acima.</p>
                            </div>
                        ) : (
                            <div className="table-responsive">
                                <table className="table table-hover table-striped">
                                    <thead className="table-dark">
                                        <tr>
                                            <th>Número</th>
                                            <th>Capacidade</th>
                                            <th>Grid (FxC)</th>
                                            <th>Ações</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {salas.map((sala) => (
                                            <tr key={sala.id}>
                                                <td>Sala {sala.numero}</td>
                                                <td>{sala.capacidade} lugares</td>
                                                <td>
                                                    <span className="badge bg-info">{sala.fileiras}x{sala.colunas}</span>
                                                </td>
                                                <td>
                                                    <button
                                                        className="btn btn-sm btn-warning me-2"
                                                        onClick={() => editarSala(sala)}
                                                    >
                                                        <i className="bi bi-pencil"></i>
                                                    </button>
                                                    <button
                                                        className="btn btn-sm btn-danger"
                                                        onClick={() => sala.id && excluirSala(sala.id)}
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