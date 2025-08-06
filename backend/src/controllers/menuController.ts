import type { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getMenu = async (req: Request, res: Response) => {
  try {
    const items = await prisma.menuItem.findMany({ include: { category: true } });
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch menu' });
  }
};

export const createMenuItem = async (req: Request, res: Response) => {
  const { name, description, price, available, categoryId } = req.body;
  try {
    const item = await prisma.menuItem.create({
      data: { name, description, price, available, categoryId }
    });
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create menu item' });
  }
};

export const updateMenuItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, description, price, available, categoryId } = req.body;
  try {
    const item = await prisma.menuItem.update({
      where: { id },
      data: { name, description, price, available, categoryId }
    });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update menu item' });
  }
};

export const deleteMenuItem = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.menuItem.delete({ where: { id } });
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete menu item' });
  }
};

export const getCategories = async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch categories' });
  }
};

export const createCategory = async (req: Request, res: Response) => {
  const { name } = req.body;
  try {
    const category = await prisma.category.create({ data: { name } });
    res.status(201).json(category);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create category' });
  }
};