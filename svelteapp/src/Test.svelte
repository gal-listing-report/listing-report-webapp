<script>
    import { db } from "./firebase";
    import { collection, where, query } from "firebase/firestore";
    import { collectionData } from "rxfire/firestore";
    import { tap } from "rxjs/operators";

    const tableRef = query(collection(db, "test_col"));

    collectionData(tableRef, { idField: "id" })
        .pipe(tap((obj) => console.log(obj)))
        .subscribe((objs) => {
            /* update UI */
        });
</script>
