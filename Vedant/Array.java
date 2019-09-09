import java.util.*;
import java.io.*;

public class Array
{
	public static int[][] arrayInteger(int m, int n)
	{
		int a[][] = new int[m][n];
		System.out.println("Integer Array");
		Scanner sc = new Scanner(System.in);

		for(int i=0;i<m;i++)
		{
			for (int j=0;j<n;j++) 
			{
				a[i][j]=sc.nextInt();
			}
		}
		return a;
	}

	public static double[][] arrayDouble(int m, int n)
	{
		double b[][] = new double[m][n];
		System.out.println("Double Array");
		Scanner sc = new Scanner(System.in);

		for(int i=0;i<m;i++)
		{
			for (int j=0;j<n;j++) 
			{
				b[i][j]=sc.nextInt();
			}
		}
		return b;
	}

	public static String[][] arrayBoolean(int m, int n)
	{
		String c[][] = new String[m][n];
		System.out.println("Boolean Array");
		Scanner sc = new Scanner(System.in);

		for(int i=0;i<m;i++)
		{
			for (int j=0;j<n;j++) 
			{
				c[i][j]=sc.nextLine();
			}
		}
		return c;
	}

	public static void display(int a[][],double b[][],String c[][],int m, int n)
	{
		PrintWriter p = new PrintWriter(System.out);

		for( int i=0;i<m;i++)
		{
			for(int j=0;j<n;j++)
			{
				p.print("\t"+a[i][j]+" ");
			}
			p.print("\n");
		}

		System.out.println();


		for( int i=0;i<m;i++)
		{
			for(int j=0;j<n;j++)
			{
				p.print("\t"+b[i][j]+" ");
			}
			p.print("\n");
		}

		System.out.println();


		for( int i=0;i<m;i++)
		{
			for(int j=0;j<n;j++)
			{ 
				p.print("\t"+c[i][j]+" ");
			}
			p.print("\n");
		}
		p.close();
	}

	public static void main(String args[])
	{
		int m,n;
		Scanner scan = new Scanner(System.in);
		System.out.println("Enter no of rows");
		m = scan.nextInt();
		System.out.println("Enter no of columns");
		n = scan.nextInt();

		int a[][] = arrayInteger(m,n);
		double b[][] = arrayDouble(m,n);
		String c[][] = arrayBoolean(m,n);
		display(a,b,c,m,n);
	}

}
