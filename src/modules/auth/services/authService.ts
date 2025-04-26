import { Admin } from '../../admin/models/AdminTypes';
import { Company } from '../../company/models/companyTypes';
import { Employe } from '../../employe/models/EmployeTypes';
import { AuthResponse, AuthUser, LoginFormData } from '../models/AuthTypes';
import { UserRole } from '../models/UserRoleTypes';

// Tipo para mock de usuário
type MockUser = (Admin | Employe) & { password: string };

const mockCompany: Company = {
  id: "company-001",
  name: "Empresa Exemplo Ltda",
  cnpj: "12.345.678/0001-99",
  createdAt: new Date(),
  activeEmployers: 30
};

const mockDatabase: Record<string, MockUser> = {
  "admin@empresa.com": {
    id: "user-123",
    name: "Gabriel Donizetti",
    email: "admin@empresa.com",
    company: mockCompany,
    role: UserRole.ADMIN,
    createdAt: new Date(),
    permissions: ["ALL"],
    password: "senha123",
  },
  "funcionario@empresa.com": {
    id: "user-456",
    name: "Sandy Seixas",
    email: "funcionario@empresa.com",
    company: mockCompany,
    role: UserRole.EMPLOYEE,
    createdAt: new Date(),
    department: "TI",
    password: "senha456",
  }
};


export const authService = {
  async login(formData: LoginFormData): Promise<AuthResponse> {

    if (!formData.email || !formData.password) {
      throw new Error('Email e senha são obrigatórios');
    }

    const user = mockDatabase[formData.email];

    if (!user || user.password !== formData.password) {
      throw new Error('Credenciais inválidas');
    }

    const token = `mock-token-${user.id}`;
    localStorage.setItem('token', token);

    return {
      token,
      user: user
    };
  },

  async getCurrentUser(): Promise<AuthUser> {
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Não autenticado');
    }

    const userId = token.replace('mock-token-', '');
    const user = Object.values(mockDatabase).find(u => u.id === userId);

    if (!user) {
      localStorage.removeItem('token');
      throw new Error('Usuário não encontrado');
    }

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      company: user.company
    };
  },

  async logout(): Promise<void> {
    localStorage.removeItem('token');
  }
};
