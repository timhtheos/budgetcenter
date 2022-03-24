/**
 * @file
 */

(function($, Drupal) {
  'use strict';

  Drupal.behaviors.budgetCenterPageExpenses = {
    attach: function(context, settings) {
      var prefix = "₱ ";

      // Item expenses.
      $(document).ready( function () {
        $(".page--expenses-item table.table").DataTable({
          autoWidth: false,
          bSort: false,
          bLengthChange: false,
          iDisplayLength: 10,
          fixedHeader: {
            header: true,
          },
          scrollX:        true,
          scrollCollapse: true,
          fixedColumns:   {
            left: 3,
            right: 3,
          },
          oLanguage: {
            "sSearch": "Quick Filter Items:"
          },
          aoColumns: [
            {bSearchable: false},
            {bSearchable: false},
            {bSearchable: false},
            null,
            {bSearchable: false},
            {bSearchable: false},
            {bSearchable: false},
            {bSearchable: false},
            {bSearchable: false},
            {bSearchable: false},
            {bSearchable: false},
          ]
        });
      });

      // Line expenses.
      $(document).ready( function () {
        $(".page--expenses-line table.table").DataTable({
          autoWidth: false,
          bSort: false,
          bLengthChange: false,
          iDisplayLength: 10,
          fixedHeader: {
            header: true,
          },
          scrollX:        true,
          scrollCollapse: true,
          fixedColumns:   {
            left: 2,
            right: 2,
          },
          oLanguage: {
            "sSearch": "Quick Filter Items:"
          },
          // bFilter: false,
          aoColumns: [
            {bSearchable: false},
            {bSearchable: false},
            null,
            {bSearchable: false},
            {bSearchable: false},
            {bSearchable: false},
            {bSearchable: false},
            {bSearchable: false},
            {bSearchable: false},
          ]
        });
      });

      // Daily expenses.
      $(document).ready( function () {
        $(".page--expenses-daily table.table").DataTable({
          autoWidth: false,
          bSort: false,
          bLengthChange: false,
          iDisplayLength: 10,
          fixedHeader: {
            header: true,
          },
          scrollX:        true,
          scrollCollapse: true,
          fixedColumns:   {
            left: 2,
            right: 3,
          },
          bFilter: false,
        });
      });

      // Weekly expenses.
      $(document).ready( function () {
        $(".page--expenses-weekly table.table").DataTable({
          autoWidth: false,
          bSort: false,
          bLengthChange: false,
          iDisplayLength: 10,
          fixedHeader: {
            header: true,
          },
          scrollX:        true,
          scrollCollapse: true,
          fixedColumns:   {
            left: 2,
            right: 3,
          },
          bFilter: false,
        });
      });

      // // Expenses.
      // var page = $(".path-frontpage"),
      //   total_amount = 0;

      // $(page).find(".view-expenses tbody tr").once("pageExpensesLandingRow").each(function(index_row) {
      //   var items_count = 0;

      //   $(this).once("pageExpensesLandingRowDetails").find(".views-field-field-expense-item li").each(function(index_details) {
      //     var units = $(this).find(".field--name-field-no-of-units").text(),
      //       unit_price = $(this).find(".field--name-field-unit-cost").text(),
      //       total_cost = parseFloat(units)*parseFloat(unit_price);
      //     items_count++;
      //     total_amount = total_amount + total_cost;
      //   });

      //   $(this).find(".views-field-nothing").html(prefix + " " + numberWithCommas((total_amount).toFixed(2)));
      //   $(this).find(".views-field-field-expense-item .item-list").after(items_count + " item(s)");
      // });

      // // Expense details.
      // var page = $(".page-node-type-expense"),
      //   total_amount = 0;

      // $(page)
      // .find(".attachment-after .view-expense-details tbody tr")
      // .once("pageExpensesDetails")
      // .each(function(index) {
      //   var units = $(this).find(".views-field-field-no-of-units").text(),
      //     unit_price = ($(this).find(".views-field-field-unit-cost:not('.expense-item-total-cost')").text()).split(" ")[1],
      //     total_cost = parseFloat(units)*parseFloat(unit_price);

      //   total_amount = total_amount + total_cost;
      //   $(this).find(".expense-item-total-cost").html(prefix + " " + (total_cost).toFixed(2));
      // });

      // $(page).find(".expense-total-amount").once("pageExpensesDetailsTotal").html(prefix + " " + numberWithCommas((total_amount).toFixed(2)));

    },
  };

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

})(jQuery, Drupal);

