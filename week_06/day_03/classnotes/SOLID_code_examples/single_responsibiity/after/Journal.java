// now the journal can be used by more than just the bear. Code is reusable now outside of the Bear class. File/folder structure is now more readable as well. You can see at a glance where Journals are dealt with.

import java.util.ArrayList;

public class Journal{

  private ArrayList<String> entries;

  public Journal(){
    entries = new ArrayList<String>();
  }

  public void writeEntry(String entry){
    entries.add(entry);
  }

  public String getEntry(int index){
    return entries.get(index);
  }

  public String getLastEntry(){
    return getEntry(entries.size() - 1);
  }

}