import java.util.*;

public class TicTac

{
	public static void main(String args[])
	{
		int x,y;
		TicTacToe t = new TicTacToe();
		Scanner scan = new Scanner(System.in);
		do
		{
			System.out.println(t.player==t.X?"Player's turn":"Computer's turn");
			System.out.println("Enter position:");
			x=scan.nextInt();
			y=scan.nextInt();
			
			t.marker(x,y);
			System.out.println(t.value());
			System.out.println("_________________");
			System.out.println();
			t.result();
		}while(t.isEmpty);
	}
}

class TicTacToe

{
	public static final int X = 1, O = -1;
	public static final int EMPTY = 0;
	public int player = X;
	public boolean isEmpty = false;
	private int board[][] = new int[3][3];

	public void marker(int x, int y)
	{
		if (x<0 || x>2 || y<0 || y>2)
		{
			System.out.println("Enter correct input for x and y. Range is 0 to 2.");
			return;
		}
		if(board[x][y] != EMPTY)
		{
			System.out.println("Position is occupied. Please select another position");
			return;
		}
		board[x][y]=player;
		player=-player;
	}

	public boolean win(int player)
	{
		return ((board[0][0] + board[0][1] + board[0][2] == player*3) ||
			(board[1][0] + board[1][1] + board[1][2] == player*3) ||
			(board[2][0] + board[2][1] + board[2][2] == player*3) ||
			(board[0][0] + board[1][0] + board[2][0] == player*3) ||
			(board[0][1] + board[1][1] + board[2][1] == player*3) ||
			(board[0][2] + board[1][2] + board[2][2] == player*3) ||
			(board[0][0] + board[1][1] + board[2][2] == player*3) ||
			(board[2][0] + board[1][1] + board[0][2] == player*3));
	}

	public void result()
	{
		if(win(X))
		{
			System.out.println("Player wins");
			isEmpty=false;
		}	
		else if(win(O))
		{
			System.out.println("Computer wins");
			isEmpty=false;	
		}
		else
		{
			if(!isEmpty)
			System.out.println("It is a tie");
		}
	}
	
	public String value()
	{
		StringBuilder s = new StringBuilder();
		isEmpty= false;
		for (int i=0;i<3 ;i++) 
		{
		  for (int j=0;j<3 ;j++) 
		  {
				
			switch(board[i][j])
			{
				case X:
    				s.append(" X ");
    				break;
				case O:
    				s.append(" O ");
    				break;
				case EMPTY:
				    s.append("   ");
    				isEmpty=true;
    				break;
			}
			if(j<2)
			{
				s.append("|");
			}
		  }
		  if(i<2)
		  	s.append("\n-----------\n");
		}
		return s.toString();
	}
}