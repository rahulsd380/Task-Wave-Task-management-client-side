import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import AddTask from '../Dashboard/Pages/AddProduct';



describe('AddProduct Component', () => {
  test('renders AddProduct component', () => {
    render(<AddTask />);
    expect(screen.getByText('Add A New Task')).toBeInTheDocument();
  });

  test('form validation works', async () => {
    render(<AddTask />);
    
    fireEvent.click(screen.getByText('Add New'));


    expect(screen.getByText('You have to provide a task title.')).toBeInTheDocument();
    expect(screen.getByText('Add a task deadline.')).toBeInTheDocument();
    expect(screen.getByText('Write a proper description for your project.')).toBeInTheDocument();


    userEvent.type(screen.getByLabelText('Task Title'), 'Test Task');
    userEvent.type(screen.getByLabelText('Task Deadline'), '2024-02-01');
    userEvent.selectOptions(screen.getByLabelText('Priority Level'), 'low');
    userEvent.type(screen.getByLabelText('Task Description'), 'This is a test task description.');

    fireEvent.click(screen.getByText('Add New'));


    await waitFor(() => {
      expect(screen.queryByText('You have to provide a task title.')).not.toBeInTheDocument();
      expect(screen.queryByText('Add a task deadline.')).not.toBeInTheDocument();
      expect(screen.queryByText('Write a proper description for your project.')).not.toBeInTheDocument();
    });
  });
});
